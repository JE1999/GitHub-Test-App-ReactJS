interface IProps {
    handleSubmit: () => void;
    children: React.ReactNode;
}

export const Form = (props: IProps) => {

    const { handleSubmit, children } = props

    return (
        <form 
            onSubmit={handleSubmit} 
        >
            { children }
        </form>
    )
}