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

function loadTopics(topicContents) {
    for (let topic of topicContents) {
        let myTr = document.createElement('tr');
        myTr.innerHTML = '<td class="tblColOne">\n' +
            '                    <a href="forum_discussion.html?id=1"><b>' + topic.title + '</b></a>\n' +
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
            '                        by <i>' + topic.responses[0].by + '</i><br>\n' +
            '                        ' + topic.responses[0].date + '\n' +
            '                    </small>\n' +
            '                </td>';
        document.querySelector('#forumTableTopics').appendChild(myTr);
    }
}

$(function(){

    $('.discussionTitle').on('click', function (){
        // $('.discussionContent').slideDown()
    })


    if (localStorage.getItem("forumJson") === null){
        localStorage.setItem('forumJson', JSON.stringify(myJSONForum));
    }

    let myJson = JSON.parse(localStorage.getItem('forumJson'));

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const discussions = urlParams.get('discussion');
    const topics = urlParams.get('topics');
    const topicId = urlParams.get('topicid');


    if (parseFloat(discussions) === 1){
        loadDiscussions(myJson);
    } else if (parseFloat(topics) === 1) {
        let myTopic = myJson.find(topic => topic.id === topicId);
        loadTopics(myTopic.topics)
    }

    forumTopicForm.addEventListener('submit', function (event){
        event.preventDefault();
        topic.value;
    })

/*
    for (let xx of myJSONForum){
        console.log(xx.topics.length)
        for (let yy of xx.topics){
            console.log(yy.responses)
            console.log(yy.responses.length)
            for (let zz of yy.responses){
                console.log(zz.by)
            }
        }
    }
 */

/*
    if (parseFloat(discussionId) === 1) {
        //loadTopics(myJSON.discussion_1);
    } else if (parseFloat(discussionId) === 2) {
        //loadTopics(myJSON.discussion_2);
    } else if (parseFloat(discussionId) === 3) {
        //loadTopics(myJSON.discussion_3);
    } else if (parseFloat(discussionId) === 4) {
        //loadTopics(myJSON.discussion_4);
    }
*/



})