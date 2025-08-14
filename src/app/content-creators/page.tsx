import Link from 'next/link';
import { Mail } from 'lucide-react';

export default function Creators() {
  return (
    <main className='min-h-screen flex items-center justify-center p-6 sm:p-8 bg-[#171613] text-gray-200'>
      <div className='max-w-3xl text-center bg-[#1e1c18] rounded-2xl p-10 mt-10 shadow-2xl border border-[#EA9F23]'>
        <h1 className='text-4xl sm:text-5xl font-bold text-[#EA9F23] mb-6'>
          Calling All Content Creators
        </h1>
        <p className='text-gray-300 text-lg sm:text-xl mb-6'>
          Are you a streamer, blogger, or social media wizard? We want to hear
          from you! Become a partner of{' '}
          <span className='text-[#EA9F23] font-semibold'>
            Of Creatures and Realms
          </span>{' '}
          and help us grow the realm.
        </p>
        <p className='text-gray-400 mb-8'>
          Please send your information including your career stats, follower
          count, accounts, and type of content to the email below. We’ll get
          back to you with opportunities to collaborate.
        </p>
        <Link
          href='mailto:ofcreaturesandrealms@gmail.com'
          className='inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#EA9F23] text-[#171613] font-semibold rounded-lg text-lg hover:bg-[#d18c1d] transition-colors'
        >
          <Mail className='w-5 h-5' /> Contact Us
        </Link>
        <div className='mt-6 text-gray-500 text-sm'>
          We look forward to discovering the champions of content creation!
        </div>
      </div>
    </main>
  );
}
