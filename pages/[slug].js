export default function Store({ name }) {
  return (
    <>
      <div>Server Side Render</div>
      <h1>{`Site Name: ${name}`}</h1>
    </>
  );
}

export async function getEdgeProps({ params }) {
  const { slug } = params;
  const init = {
    headers: {
      'content-type': 'application/json;charset=UTF-8',
    },
  };
  const response = await fetch(`https://ordering.zyda.com/${slug}`, init);
  const body = await response.json();
  const name = body.data.attributes['title-en'];
  return {
    props: {
      name,
    },
  };
}
