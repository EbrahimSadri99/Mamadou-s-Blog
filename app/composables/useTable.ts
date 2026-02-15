export const useTable = () => {
  const supabase = useSupabase();

  const getAllRecords = async (tableName: string) => {
    const { data, error } = await supabase.from(tableName).select("*");

    if (error) {
      throw error;
    }

    return data;
  };

  return { getAllRecords };
};
