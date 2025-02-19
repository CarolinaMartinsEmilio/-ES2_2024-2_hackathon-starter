const { expect } = require('chai');
const sinon = require('sinon');
const User = require('../models/User');

describe('User Model', () => {
  it('should create a new user', (done) => {
    const UserMock = sinon.mock(new User({ email: 'test@gmail.com', password: 'root' }));
    const user = UserMock.object;

    UserMock
      .expects('save')
      .yields(null);

    user.save((err) => {
      UserMock.verify();
      UserMock.restore();
      expect(err).to.be.null;
      done();
    });
  });

  it('should return error if user is not created', (done) => {
    const UserMock = sinon.mock(new User({ email: 'test@gmail.com', password: 'root' }));
    const user = UserMock.object;
    const expectedError = {
      name: 'ValidationError'
    };

    UserMock
      .expects('save')
      .yields(expectedError);

    user.save((err, result) => {
      UserMock.verify();
      UserMock.restore();
      expect(err.name).to.equal('ValidationError');
      expect(result).to.be.undefined;
      done();
    });
  });

  it('should not create a user with the unique email', (done) => {
    const UserMock = sinon.mock(new User({ email: 'test@gmail.com', password: 'root' }));
    const user = UserMock.object;
    const expectedError = {
      name: 'MongoError',
      code: 11000
    };

    UserMock
      .expects('save')
      .yields(expectedError);

    user.save((err, result) => {
      UserMock.verify();
      UserMock.restore();
      expect(err.name).to.equal('MongoError');
      expect(err.code).to.equal(11000);
      expect(result).to.be.undefined;
      done();
    });
  });

  it('should find user by email', (done) => {
    const userMock = sinon.mock(User);
    const expectedUser = {
      _id: '5700a128bd97c1341d8fb365',
      email: 'test@gmail.com'
    };

    userMock
      .expects('findOne')
      .withArgs({ email: 'test@gmail.com' })
      .yields(null, expectedUser);

    User.findOne({ email: 'test@gmail.com' }, (err, result) => {
      userMock.verify();
      userMock.restore();
      expect(result.email).to.equal('test@gmail.com');
      done();
    });
  });

  it('should remove user by email', (done) => {
    const userMock = sinon.mock(User);
    const expectedResult = {
      nRemoved: 1
    };

    userMock
      .expects('deleteOne')
      .withArgs({ email: 'test@gmail.com' })
      .yields(null, expectedResult);

    User.deleteOne({ email: 'test@gmail.com' }, (err, result) => {
      userMock.verify();
      userMock.restore();
      expect(err).to.be.null;
      expect(result.nRemoved).to.equal(1);
      done();
    });
  });

  it('should check password', async () => {
    const UserMock = sinon.mock(new User({
      email: 'test@gmail.com',
      password: '$2y$10$ux4O8y0CCilFQ5JS66namekb9Hbr1AN7kwEDn2ej6e6AYw3BPqAVa'
    }));

    const user = UserMock.object;
    const comparePasscbSpy = sinon.spy();
    await user.comparePassword('root1234', comparePasscbSpy);
    expect(comparePasscbSpy.calledOnceWithExactly(null, true)).to.be.true;
  });

  it('should generate gravatar without email and size', () => {
    const UserMock = sinon.mock(new User({}));
    const user = UserMock.object;

    const gravatar = user.gravatar();
    expect(gravatar.includes('gravatar.com')).to.equal(true);
  });

  it('should generate gravatar with size', () => {
    const UserMock = sinon.mock(new User({}));
    const user = UserMock.object;
    const size = 300;

    const gravatar = user.gravatar(size);
    expect(gravatar.includes(`s=${size}`)).to.equal(true);
  });

  it('should generate gravatar with email', () => {
    const UserMock = sinon.mock(new User({ email: 'test@gmail.com' }));
    const user = UserMock.object;
    const md5 = '1aedb8d9dc4751e229a335e371db8058';

    const gravatar = user.gravatar();
    expect(gravatar.includes(md5)).to.equal(true);
  });

  it('should return error if user deletion fails', (done) => {
    const userMock = sinon.mock(User);
    const expectedError = new Error('Deletion failed');

    userMock
      .expects('deleteOne')
      .withArgs({ email: 'test@gmail.com' })
      .yields(expectedError);

    User.deleteOne({ email: 'test@gmail.com' }, (err, result) => {
      userMock.verify();
      userMock.restore();
      expect(err).to.equal(expectedError);
      expect(result).to.be.undefined;
      done();
    });
  });
  
  it('should return error if password comparison fails', (done) => {
    const user = new User({ email: 'test@gmail.com', password: 'hashedpassword' });
    sinon.stub(user, 'comparePassword').yields(new Error('Password comparison failed'));

    user.comparePassword('wrongpassword', (err, isMatch) => {
      expect(err).to.be.an('error');
      expect(err.message).to.equal('Password comparison failed');
      expect(isMatch).to.be.undefined;
      done();
    });
  });

  it('should update a user email', (done) => {
    const userMock = sinon.mock(User);
    const expectedResult = { nModified: 1 };

    userMock
      .expects('updateOne')
      .withArgs({ email: 'test@gmail.com' }, { $set: { email: 'newemail@gmail.com' } })
      .yields(null, expectedResult);

    User.updateOne({ email: 'test@gmail.com' }, { $set: { email: 'newemail@gmail.com' } }, (err, result) => {
      userMock.verify();
      userMock.restore();
      expect(err).to.be.null;
      expect(result.nModified).to.equal(1);
      done();
    });
  });
  it('should return error if user update fails', (done) => {
    const userMock = sinon.mock(User);
    const expectedError = new Error('Update failed');

    userMock
      .expects('updateOne')
      .withArgs({ email: 'nonexistent@gmail.com' }, { $set: { email: 'updated@gmail.com' } })
      .yields(expectedError);

    User.updateOne({ email: 'nonexistent@gmail.com' }, { $set: { email: 'updated@gmail.com' } }, (err, result) => {
      userMock.verify();
      userMock.restore();
      expect(err).to.equal(expectedError);
      expect(result).to.be.undefined;
      done();
    });
  });

  it('should return error if user is not found by ID', (done) => {
    const userMock = sinon.mock(User);

    userMock
      .expects('findById')
      .withArgs('invalidID')
      .yields(null, null);

    User.findById('invalidID', (err, result) => {
      userMock.verify();
      userMock.restore();
      expect(err).to.be.null;
      expect(result).to.be.null;
      done();
    });
  });

  it('should return error when trying to delete a nonexistent user', (done) => {
    const userMock = sinon.mock(User);
    const expectedResult = { nRemoved: 0 };

    userMock
      .expects('deleteOne')
      .withArgs({ email: 'nonexistent@gmail.com' })
      .yields(null, expectedResult);

    User.deleteOne({ email: 'nonexistent@gmail.com' }, (err, result) => {
      userMock.verify();
      userMock.restore();
      expect(err).to.be.null;
      expect(result.nRemoved).to.equal(0);
      done();
    });
  });

  it('should return error if gravatar generation fails', () => {
    const user = new User({ email: 'test@gmail.com' });
    sinon.stub(user, 'gravatar').throws(new Error('Gravatar generation failed'));

    expect(() => user.gravatar()).to.throw('Gravatar generation failed');
  });

  it('should return error if user saving fails due to database error', (done) => {
    const UserMock = sinon.mock(new User({ email: 'test@gmail.com', password: 'root' }));
    const user = UserMock.object;
    const expectedError = new Error('Database error');

    UserMock
      .expects('save')
      .yields(expectedError);

    user.save((err, result) => {
      UserMock.verify();
      UserMock.restore();
      expect(err).to.equal(expectedError);
      expect(result).to.be.undefined;
      done();
    });
  });

  it('should return error if findById fails', (done) => {
    const userMock = sinon.mock(User);
    const expectedError = new Error('FindById failed');

    userMock
      .expects('findById')
      .withArgs('12345')
      .yields(expectedError);

    User.findById('12345', (err, result) => {
      userMock.verify();
      userMock.restore();
      expect(err).to.equal(expectedError);
      expect(result).to.be.undefined;
      done();
    });
  });

  it('should return error when creating a user with an unexpected error', (done) => {
    const UserMock = sinon.mock(new User({ email: 'test@gmail.com', password: 'root' }));
    const user = UserMock.object;
    const expectedError = new Error('Unexpected error');

    UserMock
      .expects('save')
      .yields(expectedError);

    user.save((err) => {
      UserMock.verify();
      UserMock.restore();
      expect(err).to.equal(expectedError);
      done();
    });
  });

  it('should retrieve all users', (done) => {
    const userMock = sinon.mock(User);
    const expectedUsers = [
      { email: 'user1@gmail.com' },
      { email: 'user2@gmail.com' }
    ];

    userMock
      .expects('find')
      .yields(null, expectedUsers);

    User.find({}, (err, result) => {
      userMock.verify();
      userMock.restore();
      expect(err).to.be.null;
      expect(result).to.be.an('array');
      expect(result.length).to.equal(2);
      done();
    });
  });

  it('should return error when retrieving all users fails', (done) => {
    const userMock = sinon.mock(User);
    const expectedError = new Error('Database read error');

    userMock
      .expects('find')
      .yields(expectedError);

    User.find({}, (err, result) => {
      userMock.verify();
      userMock.restore();
      expect(err).to.equal(expectedError);
      expect(result).to.be.undefined;
      done();
    });
  });
});

