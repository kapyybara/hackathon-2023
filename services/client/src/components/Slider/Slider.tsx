export function Slider({ slide }: any) {
    const imgs = [
        "https://images.unsplash.com/photo-1655720837928-38b1a93298ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1110&q=80",
        "https://images.unsplash.com/photo-1655720855348-a5eeeddd1bc4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80",
        "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80",
        "https://plus.unsplash.com/premium_photo-1680607980708-d2532db7a529?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
        "https://images.unsplash.com/photo-1655634535290-6bab0013accc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
        "https://plus.unsplash.com/premium_photo-1677094310893-0d6594c211ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80",
        "https://images.unsplash.com/photo-1655721532356-e9a529d403c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80",
        "https://images.unsplash.com/photo-1655720845034-b8f615109b5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80",
        "https://images.unsplash.com/photo-1655634322560-45fb577df329?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
        "https://images.unsplash.com/photo-1655720828083-96a45b0a48b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80",
        "https://images.unsplash.com/photo-1655721530791-59f5bbd64a48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80",
    ];
    return (
        <div className="w-full h-full flex rounded-xl border border-slate-300 bg-slate-50">
            <img
                class="object-cover overflow-hidden w-6/12 h-full rounded-s-xl"
                src={imgs[Math.floor(Math.random() * (imgs.length - 1))]}
                alt=""
            />
            <div class="w-6/12 h-1/2 p-4 flex flex-col justify-around align items-center mt-10">
                <h1 class="text-4xl">{slide.header}</h1>
                <span>{slide.content}</span>
            </div>
        </div>
    );
}
