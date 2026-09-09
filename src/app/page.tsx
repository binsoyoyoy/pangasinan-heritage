import { HeaderNavigation } from '@/components/organisms/HeaderNavigation';
import { SearchForm } from '@/components/molecules/SearchForm';
import { HeritageGrid } from '@/components/organisms/HeritageGrid';
import { Typography } from '@/components/atoms/Typography';

const sampleSites = [
  {
    id: '1',
    title: 'Hundred Islands National Park',
    location: 'Alaminos, Pangasinan',
    imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkHhtfUFwoIFVYaAzA0ydNCt0ulu-R3UNJmawujKvK6cav2f6wuGklTkHQkNvAUXs33ORxZzMWnJdD1EUgtEck81hmapGzDcWiy6jpTFYI4EaJwbabfMLqqInnDeYL2mNa000fs=s680-w680-h510-rw'
  },
  {
    id: '2',
    title: 'Bolinao Lighthouse',
    location: 'Bolinao, Pangasinan',
    imageUrl: 'https://elements-resized.envatousercontent.com/elements-video-cover-images/bf6d76cb-1a16-4b03-9fde-ead87c247a2d/video_preview/video_preview_0000.jpg?w=500&cf_fit=cover&q=85&format=auto&s=793f071448a6187c91ff27c8bce1aee20fd18da1af94e2af6e378a5868e8d51d'
  },
  {
    id: '3',
    title: "Balungao's Hot Spring",
    location: 'Balungao, Pangasinan',
    imageUrl: 'https://seepangasinan.com/wp-content/uploads/2021/08/IMG_2469-315x325.jpg'
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <HeaderNavigation />
      <section className="max-w-7xl mx-auto px-4 py-12 flex flex-col items-center gap-6 text-center">
        <Typography as="h1">Discover Pangasinan's Heritage</Typography>
        <Typography as="p" className="max-w-2xl">
          Explore iconic heritage sites across Pangasinan.
        </Typography>
        <SearchForm />
      </section>
      <HeritageGrid sites={sampleSites} />
    </main>
  );
}