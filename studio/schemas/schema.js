import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';
// Document schema
import tag from './tag';
import goal from './goal';
import studycase from './studycase';
import navigation from './navigation';
import bio from './bio';
import contact from './contact';
import hero from './hero';

export default createSchema({
  name: 'portfolio',
  types: schemaTypes.concat([
    studycase,
    navigation,
    bio,
    contact,
    hero,
    goal,
    tag,
  ]),
});
