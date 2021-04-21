import { ProductTC } from '../../models'
import { schemaComposer } from 'graphql-compose'
import { GraphQLUpload } from 'apollo-upload-server';

const path = require('path')
const fs = require('fs')

schemaComposer.add(GraphQLUpload);

export const createProduct = ProductTC.getResolver('createOne')

const UploadPayload = schemaComposer.createObjectTC({
  name: 'UploadPayload',
  fields: {
    url: 'String!',
  },
})

export const uploadFile = schemaComposer.createResolver({
  name: "uploadFile",
  args: {
    file: 'Upload!'
  },
  type: UploadPayload,
  resolve: async ({ args }) => {
    const { createReadStream, filename, mimetype, mode } = await args.file.file
    
    const pathName = path.join(__dirname, `../../../public/images/${filename}`)
    console.log(pathName);
    await new Promise((res) =>
      createReadStream().pipe(fs.createWriteStream(pathName)).on("close", res)
    );

    return {
      url: `http://localhost:3001/images/${filename}`,
    };
  },
})
