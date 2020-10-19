import React from 'react'
import { Link, withRouter } from "react-router-dom";
import Header from './Header';


export default function Main() {
    return (
		
					<div>
<Header></Header>
		<div className="section__content" style={{width : "1150px", marginLeft : "270px"}}>
		<div className="container-fluid p-0">
		
		
		
	
		
		
		<div className="scrumboard">
		<div className="row">
		

		
<div className="column flex admin_box">

<h1>Backlog<span className="count">10</span> 
				<span>
				<i className="fas fa-ellipsis-h dotsnav" aria-expanded="false"></i>
			<img  data-toggle="modal" data-target="#createtask"  src="images/icon/plus_icon_G.png" />
				</span></h1>					
				
				
				
<div className="portlet">

<div className="card_box">

<div className="portlet-header">
<div className="tags_row">
<span className="left">
<span className="tag bg_1">Design</span>
<span className="tag_rounded_btn">
<img src="images/icon/plus_icon.png" />
</span>
</span>
<span className="right">
<i className="fas fa-ellipsis-h dotsnav" aria-expanded="false"></i>
</span>
</div>
</div>

<div className="portlet-content">
Lorem ipsum dolor sit amet, consectetuer adipiscing elit
</div>


<div className="card_users">
<span className="left">
<img src="images/icon/profile.jpg" />
<img src="images/icon/profile_w.jpg" />
<img src="images/icon/profile.jpg"/>
</span>
<span className="right">


<span className="comments_list">
<img src="images/icon/comments_list.png"/>2
</span>

<img src="images/icon/comments_icon.png" className="comments"/>
</span>

</div>

</div>

</div>

				
<div className="portlet">

<div className="card_box">

<div className="portlet-header">

<div className="tags_row">
				<span className="left">
				<span className="tag bg_2">illustration</span>
				<span className="tag_rounded_btn">
				<img src="images/icon/plus_icon.png"/>
				</span>
				
				
				</span>
				<span className="right">
				
				<i className="fas fa-ellipsis-h dotsnav" aria-expanded="false"></i>
				
				</span>
				</div>

</div>

<div className="portlet-content">
Lorem ipsum dolor sit amet, consectetuer adipiscing elit
</div>

<div className="card_image">
<img src="images/img_task.png"/>
</div>

<div className="card_users">
<span className="left">
<img src="images/icon/profile.jpg"/>
<img src="images/icon/profile_w.jpg"/>
<img src="images/icon/profile.jpg"/>
</span>
<span className="right">


<span className="comments_list">
<img src="images/icon/comments_list.png"/>2
</span>

<img src="images/icon/comments_icon.png" className="comments"/>
</span>

</div>

</div>

</div>



</div>

<div className="column flex admin_box">
<h1>Work in progress<span className="count">12</span></h1>

<div className="portlet">

<div className="card_box">

<div className="portlet-header">
<div className="tags_row">
				<span className="left">
				<span className="tag_btn"><img src="images/icon/plus_icon.png" />Add Tag</span>
				<span className="tag_rounded_btn">
				<img src="images/icon/plus_icon.png"/>
				</span>
				
				
				</span>
				<span className="right">
				<i className="fas fa-ellipsis-h dotsnav" aria-expanded="false"></i>
				</span>
				</div>
</div>

<div className="portlet-content">
Lorem ipsum dolor sit amet, consectetuer adipiscing elit
</div>


<div className="card_users">
<span className="left">
<img src="images/icon/profile.jpg" />
<img src="images/icon/profile_w.jpg" />
<img src="images/icon/profile.jpg" />
</span>
<span className="right">


<span className="comments_list">
<img src="images/icon/comments_list.png"/>2
</span>

<img src="images/icon/comments_icon.png" className="comments"/>
</span>

</div>

</div>

</div>

<div className="portlet">

<div className="card_box">

<div className="portlet-header">
<div className="tags_row">
				<span className="left">
				<span className="tag bg_3">SEO</span>
				<span className="tag_rounded_btn">
				<img src="images/icon/plus_icon.png"/>
				</span>
				
				
				</span>
				<span className="right">
				<i className="fas fa-ellipsis-h dotsnav" aria-expanded="false"></i>
				</span>
				</div>
</div>

<div className="portlet-content">
Lorem ipsum dolor sit amet, consectetuer adipiscing elit
</div>


<div className="card_users">
<span className="left">
<img src="images/icon/profile.jpg" />
<img src="images/icon/profile_w.jpg" />
<img src="images/icon/profile.jpg" />
</span>
<span className="right">


<span className="comments_list">
<img src="images/icon/comments_list.png" />2
</span>

<img src="images/icon/comments_icon.png" className="comments" />
</span>

</div>

</div>

</div>

				
<div className="portlet">

<div className="card_box">

<div className="portlet-header">

<div className="tags_row">
				<span className="left">
				<span className="tag bg_2">illustration</span>
				<span className="tag_rounded_btn">
				<img src="images/icon/plus_icon.png" />
				</span>
				
				
				</span>
				<span className="right">
				<i className="fas fa-ellipsis-h dotsnav" aria-expanded="false"></i>
				</span>
				</div>

</div>

<div className="portlet-content">
Lorem ipsum dolor sit amet, consectetuer adipiscing elit
</div>

<div className="card_image">
<img src="images/img_task.png" />
</div>

<div className="card_users">
<span className="left">
<img src="images/icon/profile.jpg" />
<img src="images/icon/profile_w.jpg" />
<img src="images/icon/profile.jpg" />
</span>
<span className="right">


<span className="comments_list">
<img src="images/icon/comments_list.png"/>2
</span>

<img src="images/icon/comments_icon.png" className="comments"/>
</span>

</div>

</div>

</div>




</div>



<div className="column flex admin_box">
<h1>In Review <span className="count">5</span></h1>

				
<div className="portlet">

<div className="card_box">

<div className="portlet-header">

<div className="tags_row">
<span className="left">
<span className="tag bg_4">Mobile app</span>
</span>
<span className="right">
<i className="fas fa-ellipsis-h dotsnav" aria-expanded="false"></i>
</span>
</div>

</div>

<div className="portlet-content">
Lorem ipsum dolor sit amet, consectetuer adipiscing elit
</div>

<div className="card_image">
<img src="images/img_task_2.png" />
</div>

<div className="card_users">
<span className="left">
<img src="images/icon/profile.jpg" />
<img src="images/icon/profile_w.jpg" />
<img src="images/icon/profile.jpg" />
</span>
<span className="right">


<span className="comments_list">
<img src="images/icon/comments_list.png"/>2
</span>

<img src="images/icon/comments_icon.png" className="comments"/>
</span>

</div>

</div>

</div>


</div>

<div className="column flex admin_box">
<h1>Finished <span className="count">15</span></h1>

<div className="portlet">

<div className="card_box">

<div className="portlet-header">

<div className="tags_row">
				<span className="left">
				<span className="tag bg_4">Background</span>
								
				
				</span>
				<span className="right">
				<i className="fas fa-ellipsis-h dotsnav" aria-expanded="false"></i>
				</span>
				</div>

</div>

<div className="portlet-content">
Lorem ipsum dolor sit amet, consectetuer adipiscing elit
</div>

<div className="card_image">
<img src="images/img_task_2.png" /> 
</div>

<div className="card_users">
<span className="left">
<img src="images/icon/profile.jpg" />
<img src="images/icon/profile_w.jpg" />
<img src="images/icon/profile.jpg" />
</span>
<span className="right">


<span className="comments_list">
<img src="images/icon/comments_list.png" />2
</span>

<img src="images/icon/comments_icon.png" className="comments" />
</span>

</div>

</div>

</div>


<div className="portlet">

<div className="card_box">

<div className="portlet-header">

<div className="tags_row">
				<span className="left">
				<span className="tag bg_1">Design</span>
				<span className="tag_rounded_btn">
				<img src="images/icon/plus_icon.png"/>
				</span>
				
				
				</span>
				<span className="right">
				<i className="fas fa-ellipsis-h dotsnav" aria-expanded="false"></i>
				</span>
				</div>
</div>

<div className="portlet-content">
Lorem ipsum dolor sit amet, consectetuer adipiscing elit
</div>



<div className="card_users">
<span className="left">
<img src="images/icon/profile.jpg" />
<img src="images/icon/profile_w.jpg" />
<img src="images/icon/profile.jpg" />
</span>
<span className="right">


<span className="comments_list">
<img src="images/icon/comments_list.png"/>2
</span>

<img src="images/icon/comments_icon.png" className="comments"/>
</span>

</div>

</div>

</div>


<div className="portlet">

<div className="card_box">

<div className="portlet-header">

<div className="tags_row">
				<span className="left">
				<span className="tag bg_5">UX</span>
				<span className="tag_rounded_btn">
				<img src="images/icon/plus_icon.png"/>
				</span>
				
				
				</span>
				<span className="right">
				<i className="fas fa-ellipsis-h dotsnav" aria-expanded="false"></i>
				</span>
				</div>

</div>

<div className="portlet-content">
Lorem ipsum dolor sit amet, consectetuer adipiscing elit
</div>



<div className="card_users">
<span className="left"> 
<img src="images/icon/profile.jpg" />
<img src="images/icon/profile_w.jpg" />
<img src="images/icon/profile.jpg" />
</span>
<span className="right">


<span className="comments_list">
<img src="images/icon/comments_list.png"/>2
</span>

<img src="images/icon/comments_icon.png" className="comments"/>
</span>

</div>

</div>

</div>



</div>



</div></div>




	   
			<div className="row project_manage_row" style={{display: "none"}}>
			
				<div className="col-sm-6 col-lg-3">
				<div className="admin_box">
				<h1>Backlog<span className="count">10</span> 
				<span>
				<img src="images/icon/dots_nav_G.png" />
				<img src="images/icon/plus_icon_G.png" />
				</span></h1>
				
				<div className="card_box">
				
				<div className="card_item">
				<div className="tags_row">
				<span className="left">
				<span className="tag bg_1">Design</span>
				<span className="tag_rounded_btn">
				<img src="images/icon/plus_icon.png"/>
				</span>
				
				
				</span>
				<span className="right">
				<i className="fas fa-ellipsis-h dotsnav" aria-expanded="false"></i>
				</span>
				</div>
				
				<div className="card_content">
				Hero section to be improved based on the new feedback
				</div>
				
			
				
				<div className="card_users">
				<span className="left">
				<img src="images/icon/profile.jpg" />
				<img src="images/icon/profile_w.jpg" />
				<img src="images/icon/profile.jpg" />
				</span>
				<span className="right">
				
				
				<span className="comments_list">
				<img src="images/icon/comments_list.png" />2
				</span>
				
				<img src="images/icon/comments_icon.png" className="comments" />
				</span>
				
				</div>
				
				</div>
				
				
					<div className="card_item">
				<div className="tags_row">
				<span className="left">
				<span className="tag bg_2">illustration</span>
				<span className="tag_rounded_btn">
				<img src="images/icon/plus_icon.png"/>
				</span>
				
				
				</span>
				<span className="right">
				<i className="fas fa-ellipsis-h dotsnav" aria-expanded="false"></i>
				</span>
				</div>
				
				<div className="card_content">
				Hero section to be improved based on the new feedback
				</div>
				
				<div className="card_image">
				<img src="images/img_task.png"/>
				</div>
				
				<div className="card_users">
				<span className="left">
				<img src="images/icon/profile.jpg"/>
				<img src="images/icon/profile_w.jpg"/>
				<img src="images/icon/profile.jpg"/>
				</span>
				<span className="right">
				
				
				<span className="comments_list">
				<img src="images/icon/comments_list.png"/>2
				</span>
				
				<img src="images/icon/comments_icon.png" className="comments"/>
				</span>
				
				</div>
				
				</div>
				
				
				<div className="another_task">
<img src="images/icon/plus_icon_color.png" />
Add another task
</div>
				
				
				</div>
				
				</div>
				</div>
				
				<div className="col-sm-6 col-lg-3">
				<div className="admin_box">
				<h1>Work in progress<span className="count">12</span></h1>
				
					<div className="card_box">
				
				<div className="card_item">
				<div className="tags_row">
				<span className="left">
				<span className="tag_btn"><img src="images/icon/plus_icon.png"/>Add Tag</span>
				<span className="tag_rounded_btn">
				<img src="images/icon/plus_icon.png"/>
				</span>
				
				
				</span>
				<span className="right">
				<i className="fas fa-ellipsis-h dotsnav" aria-expanded="false"></i>
				</span>
				</div>
				
				<div className="card_content">
				Hero section to be improved based on the new feedback
				</div>
				
			
				
				<div className="card_users">
				<span className="left">
				<img src="images/icon/profile.jpg" />
				<img src="images/icon/profile_w.jpg" />
				<img src="images/icon/profile.jpg" />
				</span>
				<span className="right">
				
				
				<span className="comments_list">
				<img src="images/icon/comments_list.png"/>2
				</span>
				
				<img src="images/icon/comments_icon.png" className="comments"/>
				</span>
				
				</div>
				
				</div>
				
				
					<div className="card_item">
				<div className="tags_row">
				<span className="left">
				<span className="tag bg_3">SEO</span>
				<span className="tag_rounded_btn">
				<img src="images/icon/plus_icon.png"/>
				</span>
				
				
				</span>
				<span className="right">
				<i className="fas fa-ellipsis-h dotsnav" aria-expanded="false"></i>
				</span>
				</div>
				
				<div className="card_content">
				Hero section to be improved based on the new feedback
				</div>
				
			
				
				<div className="card_users">
				<span className="left">
				<img src="images/icon/profile.jpg"/>
				<img src="images/icon/profile_w.jpg"/>
				<img src="images/icon/profile.jpg"/>
				</span>
				<span className="right">
				
				
				<span className="comments_list">
				<img src="images/icon/comments_list.png"/>2
				</span>
				
				<img src="images/icon/comments_icon.png" className="comments"/>
				</span>
				
				</div>
				
				</div>
				
				
					<div className="card_item">
				<div className="tags_row">
				<span className="left">
				<span className="tag bg_2">ILLUSTRATION</span>
				<span className="tag_rounded_btn">
				<img src="images/icon/plus_icon.png"/>
				</span>
				
				
				</span>
				<span className="right">
				<i className="fas fa-ellipsis-h dotsnav" aria-expanded="false"></i>
				</span>
				</div>
				
				<div className="card_content">
				Hero section to be improved based on the new feedback
				</div>
				
				<div className="card_image">
				<img src="images/img_task.png" />
				</div>
				
				<div className="card_users">
				<span className="left">
				<img src="images/icon/profile.jpg" />
				<img src="images/icon/profile_w.jpg" />
				<img src="images/icon/profile.jpg"/>
				</span>
				<span className="right">
				
				
				<span className="comments_list">
				<img src="images/icon/comments_list.png"/>2
				</span>
				
				<img src="images/icon/comments_icon.png" className="comments"/>
				</span>
				
				</div>
				
				</div>
				
				
				<div className="another_task">
<img src="images/icon/plus_icon_color.png" />
Add another task
</div>
				
				
				</div>
				
				
				
				</div>
				</div>
				
				<div className="col-sm-6 col-lg-3">
				<div className="admin_box">
				<h1>In Review <span className="count">5</span></h1>
				
					<div className="card_box">
			
					<div className="card_item">
				<div className="tags_row">
				<span className="left">
				<span className="tag bg_4">Mobile app</span>
								
				
				</span>
				<span className="right">
				<i className="fas fa-ellipsis-h dotsnav" aria-expanded="false"></i>
				</span>
				</div>
				
				<div className="card_content">
				Hero section to be improved based on the new feedback
				</div>
				
				<div className="card_image">
				<img src="images/img_task_2.png"/>
				</div>
				
				<div className="card_users">
				<span className="left">
				<img src="images/icon/profile.jpg" />
				<img src="images/icon/profile_w.jpg" />
				<img src="images/icon/profile.jpg" />
				</span>
				<span className="right">
				
				
				<span className="comments_list">
				<img src="images/icon/comments_list.png"/>2
				</span>
				
				<img src="images/icon/comments_icon.png" className="comments"/>
				</span>
				
				</div>
				
				</div>
				
				
				<div className="another_task">
<img src="images/icon/plus_icon_color.png"/ >
Add another task
</div>
				
				
				</div>
				
				</div>
				</div>
				
				<div className="col-sm-6 col-lg-3">
				<div className="admin_box">
				<h1>Finished <span className="count">15</span></h1>
				
					<div className="card_box">
				
			
					<div className="card_item">
				<div className="tags_row">
				<span className="left">
				<span className="tag bg_4">Background</span>
								
				
				</span>
				<span className="right">
				<i className="fas fa-ellipsis-h dotsnav" aria-expanded="false"></i>
				</span>
				</div>
				
				<div className="card_content">
				Hero section to be improved based on the new feedback
				</div>
				
				<div className="card_image">
				<img src="images/img_task_2.png"/>
				</div>
				
				<div className="card_users">
				<span className="left">
				<img src="images/icon/profile.jpg"/>
				<img src="images/icon/profile_w.jpg"/>
				<img src="images/icon/profile.jpg"/>
				</span>
				<span className="right">
				
				
				<span className="comments_list">
				<img src="images/icon/comments_list.png"/>2
				</span>
				
				<img src="images/icon/comments_icon.png" className="comments"/>
				</span>
				
				</div>
				
				</div>
				
				
				
					<div className="card_item">
				<div className="tags_row">
				<span className="left">
				<span className="tag bg_1">Design</span>
				<span className="tag_rounded_btn">
				<img src="images/icon/plus_icon.png"/>
				</span>
				
				
				</span>
				<span className="right">
				<i className="fas fa-ellipsis-h dotsnav" aria-expanded="false"></i>
				</span>
				</div>
				
				<div className="card_content">
				Hero section to be improved based on the new feedback
				</div>
				
			
				
				<div className="card_users">
				<span className="left">
				<img src="images/icon/profile.jpg"/>
				<img src="images/icon/profile_w.jpg"/>
				<img src="images/icon/profile.jpg"/>
				</span>
				<span className="right">
				
				
				<span className="comments_list">
				<img src="images/icon/comments_list.png"/>2
				</span>
				
				<img src="images/icon/comments_icon.png" className="comments"/>
				</span>
				
				</div>
				
				</div>
				
				
					
					<div className="card_item">
				<div className="tags_row">
				<span className="left">
				<span className="tag bg_5">UX</span>
				<span className="tag_rounded_btn">
				<img src="images/icon/plus_icon.png"/>
				</span>
				
				
				</span>
				<span className="right">
				<i className="fas fa-ellipsis-h dotsnav" aria-expanded="false"></i>
				</span>
				</div>
				
				<div className="card_content">
				Hero section to be improved based on the new feedback
				</div>
				
			
				
				<div className="card_users">
				<span className="left">
				<img src="images/icon/profile.jpg" />
				<img src="images/icon/profile_w.jpg" />
				<img src="images/icon/profile.jpg" />
				</span>
				<span className="right">
				
				
				<span className="comments_list">
				<img src="images/icon/comments_list.png" />2
				</span>
				
				<img src="images/icon/comments_icon.png" className="comments" />
				</span>
				
				</div>
				
				</div>
				
				
				
<div className="another_task">
<img src="images/icon/plus_icon_color.png" />
Add another task
</div>
			
				
				</div>
				
				</div>
				</div>
				
									
		

		  </div>
			
  

	

		  <div className="row">
				<div className="col-md-12">
					<div className="copyright">
						<p>Copyright © 2018 Colorlib. All rights reserved. Template by <a href="https://colorlib.com">Colorlib</a>.</p>
					</div>
				</div>
			</div>
			 
			
			
			
		</div>
	</div>

   
	<div class="modal fade" id="createtask" role="dialog" >
    <div class="modal-dialog" style={{ maxWidth : "80%" }}>
    
      <div class="modal-content">
        <div class="modal-header">
  
		<h5 class="modal-title model_top_nav"> 
                  <Link to="/Todo">Open as page</Link>
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
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
      
    </div>
  </div>
  
</div>



	
    )
}
