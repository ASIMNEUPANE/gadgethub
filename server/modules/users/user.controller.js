const Model = require("./user.model");
const bcrypt = require("bcrypt");



const create = async (payload) => {
  return await Model.create(payload);
};

const list =async (size,page,search)=>{
  const pageNum = parseInt(page|| 1)
  const limit = parseInt(size || 5)
const query = {

};


const response = await Model.aggregate(
    [
      {
        '$match': query
        
      }, {
        '$sort': {
          'created_at': 1
        }
      }, {
        '$facet': {
          'metadata': [
            {
              '$count': 'total'
            }
          ], 
          'data': [
            {
              '$skip': (pageNum -1 )* limit
            }, {
              '$limit': limit
            }
          ]
        }
      }, {
        '$addFields': {
          'total': {
            '$arrayElemAt': [
              '$metadata.total', 0
            ]
          }
        }
      }, {
        '$project': {
          'data': 1, 
          'total': 1
        }
      }
    ]
  ).allowDiskUse(true);
  const newData= response[0]
  const {data,total}= newData;
  return{data,total,limit,pageNum}

  }

const getById = async (id) => {
  return await Model.findOne({ _id: id });
};

const updateById = async (id, payload) => {
  return await Model.findOneAndUpdate({ _id: id }, payload, { new: true });
};

const changePassword = async (id, oldPassword, newPassword) => {
  // check if user exits
  const user = await Model.findOne({ _id: id }).select("+password");
  if (!user) throw new Error("User not found");
  // check if old pass hash match to existing
  const isValid = await bcrypt.compare(oldPassword, user?.password);
  if (!isValid) throw new Error("oldpassword is incorrect");

  // create new password hash
  const newPass = await bcrypt.hash(newPassword, +process.env.SALT_ROUND);

  // update the userpassword
  return await Model.findOneAndUpdate(
    { _id: user?._id },
    { password: newPass },
    { new: true }
  );
};

const resetPassword = async (id, payload) => {
  const user = await Model.findOne({ _id: id });
  if (!user) throw new Error("User not found");
  const newPass = await bcrypt.hash(payload.password, +process.env.SALT_ROUND);
  return await Model.findOneAndUpdate(
    { _id: user?._id },
    { ...payload,password: newPass },
    { new: true }
  );
};

const block = async (id, payload) => {
  const user = await Model.find({ _id: id });
  if (!user) throw new Error("User not found");
  return await Model.findOneAndUpdate({ _id:id}, payload, {new: true})
};

const archive = async (id,payload)=>{
  const user = await Model.find({ _id: id });
  if (!user) throw new Error("User not found");
  return await Model.findOneAndUpdate({ _id:id}, payload, {new: true})
};


module.exports = {
  archive,
  block,
  changePassword,
  create,
  getById,
  list,
  resetPassword,
  updateById,
};
