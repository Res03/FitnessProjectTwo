namespace FitnessProjectTwo.Controllers {

    export class CommentsController {

        public comments;
        public resource = "/api/comments";

        constructor(private $http: ng.IHttpService, private $stateParams: ng.ui.IStateParamsService, private $state: ng.ui.IStateService, private TopicService: FitnessProjectTwo.Services.TopicService) {

            this.comments = this.getCommentsFromId();
        }

        public getCommentsFromId() {
            return this.$http.get(this.resource + this.$stateParams["id"]).then((response) => {
                this.comments = response.data
            });

        }
    }

}