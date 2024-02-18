interface SharedButtonProps {
    caption: string;
    count: number;
    onClick: () => void;
}

export default function SharedButton({ caption, count, onClick }: SharedButtonProps) {
    return <div>
        <button className=" px-8 py-2 my-1 bg-gray-700 rounded font-mono" onClick={onClick}>{`${caption}:${count}`}</button>
    </div>
}