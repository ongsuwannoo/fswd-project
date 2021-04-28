import { PromotionTC } from '../../models'
import { schemaComposer } from 'graphql-compose'
import { GraphQLUpload } from 'apollo-upload-server';

// import { generateRandomString } from '../../utils/generateRandomString'

// const path = require('path')
// const fs = require('fs')

schemaComposer.add(GraphQLUpload);
export const createPromotion = PromotionTC.getResolver('createOne')
export const updatePromotionById = PromotionTC.getResolver('updateById')
