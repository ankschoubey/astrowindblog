interface TipProps {
    content: string;
    children: any;
    bgColor: string;
}

const Tip: React.FC<TipProps> = ({ bgColor, content, children }) => {
    const classes = bgColor + " text-black rounded-lg p-2 flex justify-center items-center gap-3 "
    return <div className={classes} >
        <div className="font-300">{children}</div>
        <div className="font-300" dangerouslySetInnerHTML={{__html: content}}>
        </div>
    </div>;
};

export default Tip;