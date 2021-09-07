{
    type Video = {
        id: string;
        title: string;
        url: string;
        data: string;
    };

    // omit은 내가 원하는 타입을 뺄 수 있다. 
    //url과 data를 제외
    type VideoMatadata = Omit<Video, 'url' | 'data'>;

    function getVideo(id: string): Video {
        return {
            id,
            title: 'video',
            url: 'https://...',
            data: 'byte-data....',
        }
    }
    function getVideoMetadata(id: string): VideoMatadata{
        return {
            id: id,
            title: 'title',
        };
    }
}