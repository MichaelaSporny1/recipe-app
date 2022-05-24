import ReactStars from 'react-stars';
import styled from 'styled-components';
import { postRating } from '../api/requests';

interface RatingProps {
    edit: boolean
    recipeRating: Array<number>
    recipeId: string
}

// const calculateAverage = (rating: any) => {
//     if(rating.length > 0) {
//         const sum = rating.reduce((a: number, b: number) => a + b);
//         return sum / rating.length;
//     }
//     else{
//         return
//     }
// };

const CalculateAverage = (rating: any) => {
    if(rating.length > 0){
        const sum = rating.reduce((a: number, b: number) => a + b);
        return sum / rating.length;
    } else {
        return
    }
};

const starColor = '#41834a';
const emptyStarColor = '#abaeab';

const StyledStarRating = styled(ReactStars)`
    display: flex;
    justify-content: center;
`

const Ratings = ({ recipeRating, recipeId, edit}: RatingProps) => {
    const ratingChanged = async (newRating: any) => {
        console.log(recipeId, "testar single", newRating)
        const response = await postRating(recipeId, {ratings: newRating});
        if(response.status === 200){
            console.log('Rating ok')
        }
        else{
            console.log('Rating failed')
        }
        // await postRating(recipeId, newRating);
    }
    return (
        <StyledStarRating
        count={5}
        edit={edit}
        value={CalculateAverage(recipeRating)}
        onChange={ratingChanged}
        half={false}
        color1={emptyStarColor}
        color2={starColor}
        />
    )
}

export default Ratings