import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import IndexPagePreview from './preview-templates/index-page-preview';
import QuizPagePreview from './preview-templates/quiz-page-preview';

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)


CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('quiz', QuizPagePreview)


