/**
 * public/og-default.svg dosyasını paylaşım platformlarının desteklediği PNG formatına çevirir.
 * Kullanım: npm run og
 */
import sharp from 'sharp';

const source = 'public/og-default.svg';
const target = 'public/og-default.png';

const info = await sharp(source, { density: 144 }).resize(1200, 630).png({ compressionLevel: 9 }).toFile(target);

console.log(`${target} oluşturuldu (${info.width}x${info.height}, ${Math.round(info.size / 1024)} KB)`);
