import style from "./Button.module.css"

interface Props {
    color?: 'primary' | 'secondary' | 'danger';
    children: string;
    onClickButton: () => void;
}

const Button = ({ color, children, onClickButton }: Props) => {
    return (
        <div>
            <button type="button"
                onClick={onClickButton}
                className={ [style.btn, style['btn-'+ color]].join(' ') }>
                {children}
            </button>

        </div>
    )
}

export default Button
