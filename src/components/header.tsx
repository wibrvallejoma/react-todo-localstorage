export function Header({ title = 'Hello world' }) {	
  return (
    <div>
      <h1 className="text-3xl font-bold underline">{ title }</h1>
      <h2 className="text-2xl">Subtitle</h2>
    </div>
  );
}