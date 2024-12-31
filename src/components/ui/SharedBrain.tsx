import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { BACKEND_URL } from '../../config';
import Card from './Card';
import Sharecard from './Sharecard';

interface SharedContent {
  username: string;
  content: {
    title: string;
    type: "youtube" | "twitter";
    link: string;
    _id: string;
  }[];
}

const SharedBrain = () => {
  const { hash } = useParams();
  const [sharedData, setSharedData] = useState<SharedContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchSharedContent = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/api/v1/brain/${hash}`);
        setSharedData(response.data);
      } catch (err) {
        setError('Content not available or access denied');
      } finally {
        setLoading(false);
      }
    };

    fetchSharedContent();
  }, [hash]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen text-red-500 text-xl">
        {error}
      </div>
    );
  }

  return (
    <div className="p-4 ml-4 min-h-screen bg-gray-100">
      <div className="mb-6 p-4 bg-white rounded-md shadow-md">
        <h1 className="text-2xl font-bold text-gray-800">
          Shared by: {sharedData?.username}
        </h1>
      </div>
      
      <div className="flex gap-4 flex-wrap">
        {sharedData?.content.map(({type, link, title, _id}) => (
          <Sharecard 
            key={_id}
            type={type}
            link={link}
            title={title}
          
          />
        ))}
      </div>
    </div>
  );
};

export default SharedBrain;