import Image from 'next/image';
import Link from 'next/link';
import HeaderCollection from '@/components/Dashboard/HeaderCollection';

export default function Collection() {
  return (
    <section className="mt-2 p-6 w-full">
      <HeaderCollection></HeaderCollection>
      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-4 mt-4">
        <Link href={'/'} className="relative border-2 border-color-accent">
          <Image
            src={'/public/placeholder.jpg'}
            alt=""
            width={350}
            height={350}
            className="w-full"
          />
          <div className="absolute bottom-0 h-16 bg-color-accent flex justify-center items-center w-full">
            <h5 className="text-color-primary text-center">Anime Title</h5>
          </div>
        </Link>
        <Link href={'/'} className="relative border-2 border-color-accent">
          <Image
            src={'/public/placeholder.jpg'}
            alt=""
            width={350}
            height={350}
            className="w-full"
          />
          <div className="absolute bottom-0 h-16 bg-color-accent flex justify-center items-center w-full">
            <h5 className="text-color-primary text-center">Anime Title</h5>
          </div>
        </Link>
        <Link href={'/'} className="relative border-2 border-color-accent">
          <Image
            src={'/public/placeholder.jpg'}
            alt=""
            width={350}
            height={350}
            className="w-full"
          />
          <div className="absolute bottom-0 h-16 bg-color-accent flex justify-center items-center w-full">
            <h5 className="text-color-primary text-center">Anime Title</h5>
          </div>
        </Link>
        <Link href={'/'} className="relative border-2 border-color-accent">
          <Image
            src={'/public/placeholder.jpg'}
            alt=""
            width={350}
            height={350}
            className="w-full"
          />
          <div className="absolute bottom-0 h-16 bg-color-accent flex justify-center items-center w-full">
            <h5 className="text-color-primary text-center">Anime Title</h5>
          </div>
        </Link>
      </div>
    </section>
  );
}
