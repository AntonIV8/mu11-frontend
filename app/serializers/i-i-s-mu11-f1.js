import { Serializer as F1Serializer } from
  '../mixins/regenerated/serializers/i-i-s-mu11-f1';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(F1Serializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
