const BASE_URL = 'https://hacker-news.firebaseio.com/v0';

export const fetchStories = async (type: string): Promise<number[]> => {
  const response = await fetch(`${BASE_URL}/${type}.json`);
  return response.json();
};

export const fetchStory = async (id: number): Promise<any> => {
  const response = await fetch(`${BASE_URL}/item/${id}.json`);
  return response.json();
};
