type SearchableProps = {
  image: {
    src: string;
    dominant_color: string;
  };
  name: string;
  description: null | string;
  slug: string;
};

type SearchResultProps = {
  result_type: 'asset' | 'user' | 'collection' | 'bundle';
  searchable: SearchableProps;
};

export type SearchResultResponseProps = {
  records: SearchResultProps[];
};
