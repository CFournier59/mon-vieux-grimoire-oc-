const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

module.exports = (req, res, next) => {
    if (!req.file) {
        return next();
    }
    const filePath = req.file.path;
    const { name } = path.parse(req.file.filename);
    const optimizedFileName = `optimized-${name}.webp`;
    const optimizedFilePath = path.join('images', optimizedFileName);
    sharp(filePath)
        .resize(206)
        .toFormat('webp', { quality: 80 })
        .toFile(optimizedFilePath)
        .then(() => {   
            // Delete the original file
            fs.unlink(filePath, (err) => {
                if (err) {
                    console.error('Error deleting original file:', err);
                }
            });
            // Update req.file to point to the optimized file
            req.file.filename = optimizedFileName;
            req.file.path = optimizedFilePath;
            req.file.mimetype = 'image/webp';
            next();
        })
        .catch(err => {
            console.error('Error optimizing image:', err);
            next(err);
        });
};