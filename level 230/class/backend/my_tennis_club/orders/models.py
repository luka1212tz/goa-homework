from django.db import models

class Orders(models.Model):
    order_id = models.IntegerField(primary_key=True)
    customer_id = models.CharField(max_length=255)
    order_date = models.CharField(max_length=255)

    class Meta:
        db_table = "orders"
        managed = False