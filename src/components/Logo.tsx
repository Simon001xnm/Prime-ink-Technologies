import Image from 'next/image';

export function Logo() {
  return (
    <div className="flex items-center gap-2" aria-label="Prime Ink homepage">
      <Image 
        src="/533068602_122143352870831413_2802218391757417593_n.jpg" 
        alt="Prime Ink Logo" 
        width={120} 
        height={40}
        className="h-10 w-auto"
        priority
      />
    </div>
  );
}
