import { createContext, FC, PropsWithChildren, useState } from "react";

interface IContextLikes {
    likes: string[],
    setLikes: React.Dispatch<React.SetStateAction<string[]>>
}

const firstObj: IContextLikes = {
    likes: [],
    setLikes: () => {}
}

export const LikeContext = createContext<IContextLikes>(firstObj)

export const LikesProvider: FC<PropsWithChildren> = (props) => {

    const [likes, setLikes] = useState<string[]>([])
    const sendObj = {likes, setLikes}

    return (
        <LikeContext.Provider value={sendObj}>
            {props.children}
        </LikeContext.Provider>
    )
}