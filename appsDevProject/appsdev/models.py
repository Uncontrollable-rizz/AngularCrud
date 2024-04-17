from django.db import models
class College(models.Model):
    collid = models.IntegerField(primary_key=True)
    collfullname = models.CharField(max_length=100)
    collshortname = models.CharField(max_length=20)

    class Meta:
        managed = False  # Don't manage the table creation/modification
        db_table = 'colleges'  # Use the existing table named 'colleges'

class Department(models.Model):
    deptid = models.IntegerField(primary_key=True)
    deptfullname = models.CharField(max_length=100)
    deptshortname = models.CharField(max_length=20, null=True, blank=True)
    deptcollid = models.ForeignKey(College, on_delete=models.CASCADE, db_column='deptcollid')  # Specify db_column

    class Meta:
        managed = False
        db_table = 'departments'

class Program(models.Model):
    progid = models.IntegerField(primary_key=True)
    progfullname = models.CharField(max_length=100)
    progshortname = models.CharField(max_length=20, null=True, blank=True)
    progcollid = models.ForeignKey(College, on_delete=models.CASCADE, db_column='progcollid')  # Specify db_column
    progcolldeptid = models.ForeignKey(Department, on_delete=models.CASCADE, db_column='progcolldeptid')  # Specify db_column

    class Meta:
        managed = False
        db_table = 'programs'

class Student(models.Model):
    studid = models.IntegerField(primary_key=True)
    studfirstname = models.CharField(max_length=50)
    studlastname = models.CharField(max_length=50)
    studmidname = models.CharField(max_length=50, null=True, blank=True)
    studprogid = models.ForeignKey(Program, on_delete=models.CASCADE, db_column='studprogid')  # Specify db_column
    studcollid = models.ForeignKey(College, on_delete=models.CASCADE, db_column='studcollid')  # Specify db_column
    studyear = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'students'

