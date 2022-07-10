// Materi fetch data juga prinsip async await
import React from 'react';

function Fetch() {
  React.useEffect(() => {
    const request = fetch('https://api.spaceflightnewsapi.net/v3/blogs')
    .then((Response) => {
      return Response.json();
    })
    .then((Response) => {
      console.log(Response);
    });

  console.log('Hai, ini data fetch dengan then', request);
  }, [])

  const [news, setNews] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    async function getData() {
      const request = await fetch('https://api.spaceflightnewsapi.net/v3/blogs');
      const response = await request.json();

      setNews(response);
      setLoading(false);
    }
    getData();
  }, []);

  return (
    <>
    <h1>Ingfo</h1>
      {/*{loading && <i>Loading data....</i>}
    {!loading && (*/}
    
    {loading ? <i>Loading data....</i> : <ul>
    {news.map((item) => {
          return <li key={item.id}>{item.title}</li>
        })}
      </ul>
    }
      </>
  );
}

export default Fetch;
