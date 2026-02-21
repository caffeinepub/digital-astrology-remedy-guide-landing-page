export default function TrustBadges() {
  const badges = [
    {
      image: '/assets/generated/badge-instant.dim_120x120.png',
      title: 'Instant Download',
      description: 'Access immediately'
    },
    {
      image: '/assets/generated/badge-payment.dim_120x120.png',
      title: 'One-Time Payment',
      description: 'No subscriptions'
    },
    {
      image: '/assets/generated/badge-digital.dim_120x120.png',
      title: 'Digital Access',
      description: 'Use on any device'
    }
  ];

  return (
    <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
      {badges.map((badge, index) => (
        <div key={index} className="flex flex-col items-center gap-2 text-center">
          <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
            <img
              src={badge.image}
              alt={badge.title}
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <p className="font-semibold text-sm md:text-base">{badge.title}</p>
            <p className="text-xs md:text-sm text-muted-foreground">{badge.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
