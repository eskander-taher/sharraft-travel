import Image from "next/image";
import { Play } from "lucide-react";

export default function VideoSection() {
  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Video Thumbnail */}
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg group cursor-pointer">
            <Image
              src="/images/video-thumb.jpg"
              alt="بكجات سياحية خصيصًا لك"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-primary/30 group-hover:bg-primary/40 transition-colors duration-300 flex items-center justify-center">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary-foreground/90 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                <Play className="w-8 h-8 md:w-10 md:h-10 text-primary mr-[-2px]" />
              </div>
            </div>
          </div>

          {/* Text */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              {"بكجات سياحية خصيصًا لك"}
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {"نقدم لكم بكجات سياحية مخصصة تناسب احتياجاتكم ورغباتكم. سواء كنتم تبحثون عن رحلة عائلية ممتعة أو مغامرة شتوية مثيرة في روسيا، فإن فريقنا المتخصص يعمل على تصميم تجربة سفر فريدة تلبي جميع توقعاتكم. اكتشفوا جمال روسيا معنا واستمتعوا بأفضل الأسعار والخدمات المميزة."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
