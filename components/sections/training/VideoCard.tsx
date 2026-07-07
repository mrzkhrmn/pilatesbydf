"use client";

import Image from "next/image";
import { Icon } from "@/components/ui/Icon";

export function VideoCard({
  title,
  description,
  duration,
  level,
  image,
}: {
  title: string;
  description: string;
  duration: string;
  level: string;
  image: string;
}) {
  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-video rounded-2xl overflow-hidden product-card-shadow bg-surface-container-low mb-4">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-surface/90 flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
            <Icon name="play_arrow" className="text-primary text-[32px] translate-x-0.5" filled />
          </div>
        </div>
        <div className="absolute bottom-4 left-4 flex gap-2">
          <span className="bg-surface/80 backdrop-blur-sm px-3 py-1 rounded-full font-label-sm text-label-sm text-primary uppercase">
            {duration}
          </span>
          <span className="bg-surface/80 backdrop-blur-sm px-3 py-1 rounded-full font-label-sm text-label-sm text-primary uppercase">
            {level}
          </span>
        </div>
      </div>
      <h3 className="font-headline-md text-headline-md text-primary mb-1 group-hover:text-secondary transition-colors">
        {title}
      </h3>
      <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2">
        {description}
      </p>
    </div>
  );
}
