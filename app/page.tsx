import Storybook from '@/components/Storybook';

export default function Home() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-[#3e2723] via-[#4e342e] to-[#5d4037]">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 2px,
              rgba(0, 0, 0, 0.05) 2px,
              rgba(0, 0, 0, 0.05) 4px
            ),
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 80px,
              rgba(0, 0, 0, 0.08) 80px,
              rgba(0, 0, 0, 0.08) 82px
            )
          `
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'2\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' opacity=\'0.15\'/%3E%3C/svg%3E")',
            backgroundBlendMode: 'overlay'
          }}
        >
          <Storybook />
        </div>
      </div>
    </div>
  );
}
