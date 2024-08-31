<h1># reuseable-star-rating-component</h1>
Here are the props that the StarRating component accepts:
<h2>Example Usage of all props:</h2>
import StarRating from './StarRating';

function App() {
  return (
    <StarRating
      maxRating={5}
      color="#FFD700"
      size={30}
      className="custom-star-rating"
      message={['Terrible', 'Bad', 'Okay', 'Good', 'Great']}
      defaultRating={3}
      onSetRating={(rating) => console.log('New rating is:', rating)}
    />
  );
}

export default App;

