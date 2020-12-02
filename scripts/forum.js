function loadDiscussions(discussionContents) {
    for (let content of discussionContents){
        let myTotalPosts = 0;
        for (let topics of content.topics){
            myTotalPosts+=topics.responses.length;
        }
        let myTr = document.createElement('tr');
        myTr.innerHTML = '<tr>\n' +
            '                        <td class="tblColOne">\n' +
            '                            <a href="forum_discussion.html?topics=1&topicid='+ content.id +'"><b>'+ content.discussion +'</b></a>\n' +
            '                            <p>\n' +
            '                                 '+ content.description +'\n' +
            '                            </p>\n' +
            '                        </td>\n' +
            '                        <td class="notMobileColumn">\n' +
            '                            '+ content.topics.length +'\n' +
            '                        </td>\n' +
            '                        <td class="notMobileColumn">\n' +
            '                            '+ myTotalPosts +'\n' +
            '                        </td>\n' +
            '                        <td>\n' +
            '                            <a href="#">'+ content.topics[0].title +'</a><br>\n' +
            '                            <small>\n' +
            '                                by <i>'+ content.topics[0].creator +'</i><br>\n' +
            '                                '+ content.topics[0].dateCreated +'\n' +
            '                            </small>\n' +
            '                        </td>\n' +
            '                    </tr>';
        document.querySelector('#forumTableDiscussions').appendChild(myTr);
    }
}

function loadTopics(topicContents, topicId) {
    for (let topic of topicContents) {
        let myTr = document.createElement('tr');
        myTr.innerHTML = '<td class="tblColOne">\n' +
            '                    <a href="forum_topic.html?topic=1&topicid='+ topicId +'&id='+ topic.id +'"><b>' + topic.title + '</b></a>\n' +
            '                    <div><small>by <i>' + topic.creator + '</i> | ' + topic.dateCreated + '</small></div>\n' +
            '                </td>\n' +
            '                <td class="notMobileColumn">\n' +
            '                    ' + topic.responses.length + '\n' +
            '                </td>\n' +
            '                <td class="notMobileColumn">\n' +
            '                    ' + topic.views + '\n' +
            '                </td>\n' +
            '                <td>\n' +
            '                    <small>\n'+
            '                        by <i>' + (topic.responses.length > 0 ? topic.responses[0].by : 0) + '</i><br>\n' +
            '                        ' + (topic.responses.length > 0 ? topic.responses[0].date : '') + '\n' +
            '                    </small>\n' +
            '                </td>';
        document.querySelector('#forumTableTopics').appendChild(myTr);
    }
}

function loadResponses(topicResponses) {
    for (let response of topicResponses) { console.log(response)
        let myDiv = document.createElement('div');
        myDiv.className = 'responseContainer';
        myDiv.innerHTML = '<h3>'+ response.title +'</h3>\n' +
            '                <div class="creatorMeta">\n' +
            '                    <small>by <i>'+ response.by +'</i> | '+ response.date +'</small>\n' +
            '                </div>\n' +
            '                <div>\n' +
            '                    <p>'+ response.content +'</p>\n' +
            '                </div>';
        document.querySelector('#topicContainer').appendChild(myDiv);
    }
}

$(function(){

    if (localStorage.getItem("forumJson") === null){
        localStorage.setItem('forumJson', JSON.stringify(myJSONForum));
    }

    let myJson = JSON.parse(localStorage.getItem('forumJson'));

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const discussions = urlParams.get('discussion');
    const topics = urlParams.get('topics');
    const topicId = urlParams.get('topicid');
    const topicPage = urlParams.get('topic');
    const id = urlParams.get('id');

    if (parseFloat(discussions) === 1){
        loadDiscussions(myJson);
    } else if (parseFloat(topics) === 1) {
        let myTopic = myJson.find(topic => topic.id === topicId); console.log(myTopic)
        loadTopics(myTopic.topics, topicId)

        forumTopicForm.addEventListener('submit', function (event){
            event.preventDefault();
            let timeStamp = generateTimeStamp(new Date());
            let myTopicObj = {
                "id":(myTopic.topics.length+1).toString(), "title":forumTopicForm.topicTitle.value, "creator":localStorage.getItem('userFullName'), "dateCreated":timeStamp, "views":"0",
                "responses": [
                    {
                        "title": this.topicTitle.value,
                        "content": this.topicContent.value,
                        "by":localStorage.getItem('userFullName'),
                        "date":timeStamp
                    }
                ]
            };

            myTopic.topics.push(myTopicObj);
            localStorage.setItem('forumJson', JSON.stringify(myJson));
            forumTopicForm.reset();
            window.location.reload();
        })

    } else if (parseFloat(topicPage) === 1) {
        let myTopics = myJson.find(topic => topic.id === topicId);
        let myTopic = myTopics.topics.find(topic => topic.id === id);
        myTopic.views = (parseFloat(myTopic.views) + 1).toString();
        localStorage.setItem('forumJson', JSON.stringify(myJson));console.log(myTopic.views)
        let myTopicResponses = myTopic.responses;
        loadResponses(myTopicResponses);

        forumTopicResponseForm.addEventListener('submit', function (event) {
            event.preventDefault();
            let timeStamp = generateTimeStamp(new Date());
            let responseTitle = 'Re: ' + myTopic.title;
            let myResponseObj = {
                "title":responseTitle,
                "content": this.topicReply.value,
                "by": localStorage.getItem('userFullName'),
                "date": timeStamp
            }

            myTopicResponses.push(myResponseObj);
            localStorage.setItem('forumJson', JSON.stringify(myJson));
            forumTopicResponseForm.reset();
            window.location.reload();
        });
    }

})