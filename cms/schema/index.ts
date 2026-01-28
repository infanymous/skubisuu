import about from './about';
import contact from './contact';
import gallery from './gallery';
import home from './home';

const schemas = [about, contact, gallery, home];

export default schemas;

// Keep named exports if other files use them.
export { about as aboutSchema, contact as contactSchema, gallery as gallerySchema, home as homeSchema };