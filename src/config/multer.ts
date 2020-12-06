import { AppError } from '../shared/errors/AppError';

export const multerConfig = {
  limits: {
    fileSize: 10 * 1024 * 1024
  },
  fileFilter: (req, file, callback) => {
    const allowedMimes = [
      'image/jpeg',
      'image/pjpeg',
      'image/png',
      'image/gif'
    ];

    if (allowedMimes.includes(file.mimetype)) {
      callback(null, true);
    } else {
      callback(new AppError('Tipo de arquivo inválido'));
    }
  }
};