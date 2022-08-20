import { model, Model, Schema } from 'mongoose';

export type PartnerAttributes = {
  id: string;
  tradingName: string;
  ownerName: string;
  document: string;
  address: {
    type: string;
    coordinates: number[][];
  };
  coverageArea: {
    type: string;
    coordinates: number[];
  };
};

export type PartnerDocument = Document & PartnerAttributes;

type PartnerModel = Model<PartnerDocument>;

const MultipolygonSchema: Schema = new Schema({
  type: {
    type: String,
    enum: ['MultiPolygon'],
  },
  coordinates: {
    type: [[[[Number]]]],
  },
});

const PointSchema: Schema = new Schema({
  type: {
    type: String,
    enum: ['Point'],
    required: true,
  },
  coordinates: {
    type: [Number],
    required: true,
  },
});

const PartnerSchema: Schema = new Schema({
  id: {
    type: String,
  },
  tradingName: {
    type: String,
  },
  ownerName: {
    type: String,
  },
  document: {
    type: String,
  },
  coverageArea: {
    type: MultipolygonSchema,
  },
  address: {
    type: PointSchema,
  },
});

export default model<PartnerDocument, PartnerModel>('Partner', PartnerSchema);
