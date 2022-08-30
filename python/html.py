import pypandoc


html = """
<h3>This is a title</h3>
<p><img src="//i2.wp.com/placehold.it/150x150" alt="I go below the image as a caption"></p>
<p><i>This is <b>some</b> text</i> in a <a href="http://google.com">paragraph</a></p>
<ul>
    <li>Boo! I am a <b>list</b></li>
</ul>
"""
# output = pypandoc.convert_file('1.html', 'docx', outputfile="file1.docx")  # 将网页直接转换成docx
output = pypandoc.convert_text(html, 'docx', 'html', outputfile="file1.docx")  # 将 html 代码转化成docx