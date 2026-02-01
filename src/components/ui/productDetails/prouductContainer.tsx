import Image from 'next/image';
import { Product } from '@/types/product';
import Button from '@/components/shared/button';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';

export default function ProductContainer({
  product }: { product: Product }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      <div className="flex justify-center bg-[#F6F6F6] rounded-2xl p-10">
        <Image
          src={product.image}
          alt={product.title}
          width={400}
          height={400}
          className="object-contain mix-blend-multiply"
          priority
        />
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold text-black">{product.title}</h1>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="relative inline-block text-xl leading-none">
              <div className="flex text-gray-300">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star}>★</span>
                ))}
              </div>
              <div
                className="absolute top-0 left-0 flex text-yellow-400 overflow-hidden"
                style={{ width: `${(product.rating.rate / 5) * 100}%` }}
              >
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star}>★</span>
                ))}
              </div>
            </div>
            <span className="text-gray-400 text-sm font-medium">
              {product.rating.rate} / 5
            </span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-2xl font-bold text-black">${product.price}</span>
          <span className="text-gray-400 line-through text-xl">${(product.price + 100).toFixed(2)}</span>
        </div>
        <p className="text-gray-600 leading-relaxed italic">
          {product.description}
        </p>
        <div className="flex gap-4 mt-6">
          <Button label="Add to Wishlist" variant="outline" className="flex-1" />
          <Button label="Add to Card" variant="primary" className="flex-1" />
        </div>
        <div className="grid grid-cols-3 gap-2 mt-8">
          <div className="flex flex-col items-center gap-2 xl:flex-row xl:items-center xl:gap-4">
            <div className="bg-[#F6F6F6] p-4 rounded-xl text-center text-xs flex items-center justify-center">
              <LocalShippingOutlinedIcon />
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="font-bold text-center">Free Delivery</p>
              <p className="text-gray-500 text-center">1-2 days</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2 xl:flex-row xl:items-center xl:gap-4">
            <div className="bg-[#F6F6F6] p-4 rounded-xl text-center text-xs">
              <StorefrontOutlinedIcon />
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="font-bold text-center">In Stock</p>
              <p className="text-gray-500 text-center">Today</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2 xl:flex-row xl:items-center xl:gap-4">
            <div className="bg-[#F6F6F6] p-4 rounded-xl text-center text-xs">
              <VerifiedOutlinedIcon />
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="font-bold text-center">Guaranteed</p>
              <p className="text-gray-500 text-center">1 year</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}