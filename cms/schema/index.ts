import about from './about';
import contact from './contact';
import gallery from './gallery';
import home from './home';
import settings from './settings';

const schemas = [settings, about, contact, gallery, home];

export default schemas;

// Keep named exports if other files use them.
export {
	settings as settingsSchema,
	about as aboutSchema,
	contact as contactSchema,
	gallery as gallerySchema,
	home as homeSchema,
};