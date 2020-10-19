import React from 'react'
import Sidebar from './Sidebar'

export default function Todo() {
    return (
        <div>
            <Sidebar></Sidebar>
                    <div class="page-container">
   

   <div class="main-content">
   
<div class="modal-content new_task no-border">
               <div class="modal-header">
                   <h5 class="modal-title model_top_nav"> 
                   <span>Docs</span>
                   <span>Title</span>
                   </h5>
                   
                   <div class="model_top_nav">
                   <span><a href="#">Share</a></span>
                   <span><a href="#">Updates</a></span>
                   <span><a href="#">Favorite</a></span>
                   <span><a href="#"><i class="fas fa-ellipsis-h" aria-expanded="false"></i></a></span>
                   
                   </div>
                   
                   
                   
               </div>
               <div class="modal-body normal_page">
               
<form action="" method="post" class="form-horizontal">
<div class="row form-group">
<div class="col col-md-3">
<label for="hf-email" class=" form-control-label">
<i class="fa fa-list" aria-hidden="true"></i> Task Title</label>
</div>
<div class="col-12 col-md-9">
<input type="email" id="hf-email" name="hf-email" placeholder="Task Name..." class="form-control" />

</div>
</div>


<div class="row form-group">
<div class="col col-md-3">
<label for="hf-password" class=" form-control-label">
<i class="fas fa-tasks"></i> 
Task Type</label>
</div>
<div class="col-12 col-md-9">
<input type="password" id="hf-password" name="hf-password" placeholder="UI Dev, Design, Development, React, QA etc.." class="form-control" />

</div>
</div>

<div class="row form-group">
<div class="col col-md-3">
<label for="hf-password" class=" form-control-label"><i class="far fa-calendar-alt"></i> Created </label>
</div>
<div class="col-12 col-md-9">
Oct 17, 2020 3:57 PM
</div>
</div>

<div class="row form-group">
<div class="col col-md-3">
<label for="hf-password" class=" form-control-label">
<i class="	far fa-clock"></i> Last Edited Time </label>
</div>
<div class="col-12 col-md-9">
Oct 17, 2020 4:09 PM
</div>
</div>

<div class="row form-group">
<div class="col col-md-3">
<label for="hf-password" class=" form-control-label">
<i class="fa fa-check-circle"></i>
Status</label>
</div>
<div class="col-12 col-md-9">

<select name="selectSm" class="form-control-sm form-control">
<option value="0">Please select Status</option>
<option value="1">In Progress</option>
<option value="2">In Progress</option>
<option value="3">Archived</option>
<option value="4">Development Complete</option>
</select>


</div>
</div>

<div class="row form-group">
<div class="col col-md-3">
<label for="hf-password" class=" form-control-label"><i class="fa fa-users" aria-hidden="true"></i> Stake Holders </label>
</div>
<div class="col-12 col-md-9">
<select name="selectSm" class="form-control-sm form-control" multiple>
<option value="0">Please select People</option>
<option value="1">Krishna Kola</option>
<option value="2">Suresh Gorukanti</option>
<option value="3">Samatha</option>
</select>
</div>
</div>


<div class="row form-group">
<div class="col col-md-3">
<label for="hf-password" class=" form-control-label">
<i class='far fa-comment-alt'> </i> Comments </label>
</div>
<div class="col-12 col-md-9">


<textarea name="textarea-input" id="textarea-input" rows="5" placeholder="comments..." class="form-control"></textarea>


<button type="button" class="btn btn-primary btn-sm m-t-20">
Create Task
</button>

</div>
</div>





</form>

                   
                   
                   
               </div>
       
           </div>
       
       

  </div>
  
</div>

</div>
    )
}
