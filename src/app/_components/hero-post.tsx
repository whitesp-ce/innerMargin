import Avatar from "@/app/_components/avatar";
import CoverImage from "@/app/_components/cover-image";
import { type Author } from "@/interfaces/author";
import Link from "next/link";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

export function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) {
  return (
    <section>
      <div className="mb-4">
        {/* <CoverImage title={title} src={coverImage} slug={slug} /> */}
        <h2 className="font-bold">Newest thought</h2>
      </div>
      <div className="flex items-start max-w-2xl mb-20 md:mb-28">
        <div className="w-10 h-px bg-gray-500 mt-2 mr-2">

        </div>
        <div>
          <div className="text-sm mb-2">
            <DateFormatter dateString={date} />
          </div>
          <h3 className="mb-4  leading-tight">
            <Link href={`/posts/${slug}`} className="hover:underline">
              {title}
            </Link>
          </h3>
        </div>
      </div>
    </section>
  );
}
