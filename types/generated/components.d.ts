import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsShared extends Schema.Component {
  collectionName: 'components_components_shareds';
  info: {
    displayName: 'Shared';
    icon: 'cube';
  };
  attributes: {
    Body: Attribute.RichText;
  };
}

export interface SharedShared extends Schema.Component {
  collectionName: 'components_shared_shareds';
  info: {
    displayName: 'shared';
    description: '';
  };
  attributes: {
    body: Attribute.Blocks & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'components.shared': ComponentsShared;
      'shared.shared': SharedShared;
    }
  }
}
