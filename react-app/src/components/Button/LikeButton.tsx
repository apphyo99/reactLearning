import { useState } from "react";
import { AiTwotoneLike, AiFillLike } from "react-icons/ai";

interface Props {
    onClick: () => void;
}

const LikeButton = ({ onClick }: Props) => {

    const [status, setStatus] = useState(true);

    const toggle = () => {
        setStatus(!status);
        onClick();
    }

    if (status)
        return (
            <AiTwotoneLike size={30} onClick={toggle} />
        );
    return (
        <AiTwotoneLike size={30} color="Red" onClick={ toggle} />
    )
};

export default LikeButton
