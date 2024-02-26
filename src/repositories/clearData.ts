import { connectToDatabase } from './connectToDatabase';

export const clearData = async () => {
	const db = await connectToDatabase();
	
  return await db.run(`DELETE FROM migration`);
};
