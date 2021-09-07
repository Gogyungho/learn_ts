{
    type Video = {
        id: string;
        title: string;
        url: string;
        data: string;
    };

    //기존에 타입에서 내가 원하는 것만 골라서 사용할 수 있다.
    type VideoMatadata = Pick<Video, 'id' | 'title'>;

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