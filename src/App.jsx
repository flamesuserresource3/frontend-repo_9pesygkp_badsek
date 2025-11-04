import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SectionRow from './components/SectionRow';

const makeItems = (prefix, count, startSeed = 1) =>
  Array.from({ length: count }).map((_, i) => {
    const id = `${prefix}-${i + startSeed}`;
    const genres = ['Action', 'Drama', 'Sci-Fi', 'Thriller', 'Comedy', 'Adventure'];
    const durations = ['1h 45m', '2h 10m', '2h 28m', '2h 02m', '1h 58m'];
    const ratings = [7.8, 8.2, 9.1, 7.5, 8.7, 8.9];
    return {
      id,
      title: `Title ${i + 1}`,
      year: 2016 + ((i + startSeed) % 8),
      duration: durations[(i + startSeed) % durations.length],
      genre: genres[(i + startSeed) % genres.length],
      rating: ratings[(i + startSeed) % ratings.length],
      image: `https://picsum.photos/seed/${encodeURIComponent(id)}/600/900`,
    };
  });

function App() {
  const trending = makeItems('trending', 12, 1);
  const newReleases = makeItems('new', 12, 20);
  const topRated = makeItems('top', 12, 40);
  const continueWatching = makeItems('continue', 10, 70);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12 py-12">
          <SectionRow title="Trending Now" items={trending} />
          <SectionRow title="New Releases" items={newReleases} />
          <SectionRow title="Top Rated" items={topRated} />
          <SectionRow title="Continue Watching" items={continueWatching} />
        </div>
      </main>
      <footer className="border-t border-white/10 py-8 text-center text-white/50">
        © {new Date().getFullYear()} BlueStream — All rights reserved.
      </footer>
    </div>
  );
}

export default App;
